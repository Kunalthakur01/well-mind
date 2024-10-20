import React, { useState } from 'react';
import { MessageCircle, X, User } from 'lucide-react';

type ChatMode = 'bot' | 'professional';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean; sender?: string }[]>([]);
    const [input, setInput] = useState('');
    const [chatMode, setChatMode] = useState<ChatMode>('bot');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, isUser: true }]);
            setInput('');
            if (chatMode === 'bot') {
                setTimeout(() => {
                setMessages(prev => [...prev, { text: getBotResponse(input), isUser: false }]);
                }, 500);
            } else {
                setTimeout(() => {
                    setMessages(prev => [...prev, { text: "A professional will respond to your message soon. Thank you for your patience.", isUser: false, sender: 'System' }]);
                }, 500);
            }
        }
    };

    const getBotResponse = (userInput: string): string => {
        const lowerInput = userInput.toLowerCase();
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return "Hello! How can I assist you today?";
        } else if (lowerInput.includes('appointment') || lowerInput.includes('book')) {
            return "To book an appointment, please use our booking form on the 'Book a Session' page.";
        } else if (lowerInput.includes('services')) {
            return "We offer various services including individual therapy, group therapy, and more. Check our Services page for details.";
        } else if (lowerInput.includes('help') || lowerInput.includes('support')) {
            return "If you need immediate support, please call our helpline at 1-800-123-4567. For non-urgent matters, consider booking a session with one of our therapists.";
        } else if (lowerInput.includes('chat') && (lowerInput.includes('doctor') || lowerInput.includes('therapist'))) {
            return "To chat with a doctor or therapist, please switch to the professional chat mode using the button above the chat input.";
        } else {
            return "I'm here to help. If you have specific questions about our services or need to book an appointment, please let me know.";
        }
    };

    const switchChatMode = () => {
        setChatMode(chatMode === 'bot' ? 'professional' : 'bot');
        setMessages([]);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen ? (
                <div className="bg-white shadow-lg rounded-lg w-80 h-96 flex flex-col">
                    <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                        <h3 className="font-bold">{chatMode === 'bot' ? 'MindWell Assistant' : 'Professional Chat'}</h3>
                        <button onClick={toggleChat} className="text-white">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex-grow overflow-y-auto p-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                                <span className={`inline-block p-2 rounded-lg ${msg.isUser ? 'bg-blue-100' : 'bg-gray-200'}`}>
                                    {msg.sender && <strong>{msg.sender}: </strong>}
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t">
                        <button
                            onClick={switchChatMode}
                            className="w-full mb-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
                            Switch to {chatMode === 'bot' ? 'Professional Chat' : 'Bot Chat'}
                        </button>
                        <div className="flex">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type a message..."
                                className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button onClick={toggleChat} className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
                    <MessageCircle size={24} />
                </button>
            )}
        </div>
    );
};

export default Chatbot;