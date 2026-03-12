import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';
import { Button } from './ui/button';

const SYSTEM_PROMPT = `
You are the personal AI assistant for Hisamuddin Choriwala.
You should act professional, friendly, and helpful.
Answer questions about Hisamuddin based on the following details:

Hisamuddin Choriwala
Graphics Designer | UI/UX Designer
LinkedIn: linkedin.com/in/hisamuddin-choriwala-a3b2b22aa
Company: JunkiesCoder
Professional Summary
Creative and detail-oriented Graphics and UI/UX Designer with hands-on experience designing mobile apps, websites, and digital marketing creatives. Currently working at JunkiesCoder, contributing to real-world client projects including app UI design, website design, and end-to-end social media post design. Strong understanding of user-centered design, brand consistency, and modern design systems.
Professional Experience
Graphics & UI/UX Designer — JunkiesCoder
• Designed UI/UX for multiple mobile applications across different industries
• Created responsive website designs aligned with brand and usability standards
• Designed all Instagram posts, banners, and marketing creatives for the company
• Collaborated with developers and marketers to ensure design feasibility and consistency
• Improved visual identity and engagement through modern design practices
Key Skills
• UI/UX Design (Mobile & Web)
• Graphic Design & Social Media Creatives
• Wireframing & Prototyping
• User Research & Design Thinking
• Branding & Visual Identity
• Design Tools: Figma, Adobe XD, Photoshop, Illustrator
Portfolio
Mobile App Designs: junkiescoder.com/mobile-apps-portfolio
Website Designs: junkiescoder.com/websites-portfolio
Instagram Work: instagram.com/junkiescoder

Contact Details:
Email: hchoriwala1@gmail.com
Phone: +91 9106646539
Location: Ahmedabad

If anyone asks "who is your creator" or "who made you", you must answer: "Hisamuddin Choriwala".
Keep your answers concise and well-formatted. Use bullet points if necessary.
`;

type Message = { role: 'user' | 'assistant' | 'system'; content: string };

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi there! I am Hisamuddin\'s AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.filter(m => m.role !== 'system'),
        { role: 'user', content: userMessage }
      ];

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          messages: apiMessages,
          temperature: 0.7,
          stream: true,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      setIsLoading(false); // Stop loading indicator once stream starts
      
      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      
      // Add an empty assistant message to append to
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      let done = false;
      while (!done) {
        if (!reader) break;
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n').filter(line => line.trim() !== '');
          for (const line of lines) {
            if (line.startsWith('data: ') && line !== 'data: [DONE]') {
              try {
                const data = JSON.parse(line.replace(/^data: /, ''));
                const content = data.choices[0]?.delta?.content || '';
                if (content) {
                  setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    lastMessage.content += content;
                    return newMessages;
                  });
                }
              } catch (e) {
                console.error("Error parsing stream chunk:", e);
              }
            }
          }
        }
      }

    } catch (error) {
      console.error('Chat error:', error);
      setIsLoading(false);
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, I am having trouble connecting right now. Please try again later.' }]);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Menu - Chatbot Window */}
      <div
        className={`bg-background/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right mb-4 flex flex-col w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] ${
          isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/20 p-2">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Hisam's AI Assistant</h3>
              <p className="text-white/70 text-xs">Online & Ready to help</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                  msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                    : 'bg-card border shadow-sm rounded-tl-sm text-card-foreground prose prose-sm dark:prose-invert max-w-none'
                }`}>
                  {msg.role === 'assistant' ? (
                    <div className="markdown-content">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <span className="whitespace-pre-wrap">{msg.content}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-2 max-w-[85%] flex-row">
                <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-4 rounded-2xl rounded-tl-sm bg-card border shadow-sm flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-background border-t">
          <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-muted/50 border rounded-full px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all pr-12"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon" 
              disabled={!input.trim() || isLoading}
              className="absolute right-1 w-10 h-10 rounded-full"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-neon hover:scale-110 transition-all duration-300 relative z-20 ${
          isOpen ? 'rotate-90 scale-90' : ''
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </button>
    </div>
  );
};
