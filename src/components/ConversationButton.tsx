
import React, { useState, useEffect } from 'react';
import { useConversation } from '@11labs/react';
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const ConversationButton = () => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const conversation = useConversation({
    onConnect: () => {
      console.log('Conectado a Malbe');
      setIsConnecting(false);
    },
    onDisconnect: () => {
      console.log('Desconectado de Malbe');
      setIsConnecting(false);
    },
    onError: (error) => {
      console.error('Error en la conversación:', error);
      toast({
        title: "Error",
        description: "No se pudo conectar con Malbe. Inténtalo de nuevo.",
        variant: "destructive",
      });
      setIsConnecting(false);
    },
    onMessage: (message) => {
      console.log('Mensaje recibido:', message);

      try {
        const parsed = JSON.parse(message.text);
        if (parsed?.redirect) {
          window.location.href = parsed.redirect;
        }
      } catch {
        console.log("Respuesta normal:", message.text);
      }
    }
  });

  // Hide toasts when conversation is active
  useEffect(() => {
    const toastContainer = document.querySelector('[data-sonner-toaster]') || 
                          document.querySelector('.toast-viewport') ||
                          document.querySelector('[data-radix-toast-viewport]');
    
    if (toastContainer) {
      if (conversation.status === 'connected') {
        (toastContainer as HTMLElement).style.display = 'none';
      } else {
        (toastContainer as HTMLElement).style.display = '';
      }
    }
  }, [conversation.status]);

  const requestMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsPermissionGranted(true);
      toast({
        title: "Micrófono activado",
        description: "Ahora puedes hacer clic en 'Hablar con Malbe'",
      });
    } catch (error) {
      console.error('Error al solicitar permisos del micrófono:', error);
      toast({
        title: "Permisos requeridos",
        description: "Necesitas permitir el acceso al micrófono para hablar con Malbe",
        variant: "destructive",
      });
    }
  };

  const startConversation = async () => {
    if (!isPermissionGranted) {
      await requestMicrophonePermission();
      return;
    }

    try {
      setIsConnecting(true);
      await conversation.startSession({
        agentId: 'agent_01jymdjr4xfdz8q97d5ykrjxz4'
      });
    } catch (error) {
      console.error('Error al iniciar conversación:', error);
      toast({
        title: "Error de conexión",
        description: "No se pudo iniciar la conversación. Verifica tu conexión.",
        variant: "destructive",
      });
      setIsConnecting(false);
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      console.error('Error al terminar conversación:', error);
    }
  };

  const isConnected = conversation.status === 'connected';
  const isSpeaking = conversation.isSpeaking;

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
      {!isPermissionGranted ? (
        <Button
          onClick={requestMicrophonePermission}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-glow w-full min-h-[56px] sm:min-h-[64px]"
        >
          <Mic className="w-5 h-5 mr-2 flex-shrink-0" />
          <span className="truncate">Activar Micrófono</span>
        </Button>
      ) : (
        <Button
          onClick={isConnected ? endConversation : startConversation}
          disabled={isConnecting}
          size="lg"
          className={`px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full min-h-[56px] sm:min-h-[64px] ${
            isConnected 
              ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 animate-pulse' 
              : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 animate-glow'
          } text-white`}
        >
          {isConnecting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 flex-shrink-0"></div>
              <span className="truncate">Conectando...</span>
            </>
          ) : isConnected ? (
            <>
              <PhoneOff className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="truncate">Terminar Llamada</span>
            </>
          ) : (
            <>
              <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="truncate">Hablar con Malbe</span>
            </>
          )}
        </Button>
      )}

      {isConnected && (
        <div className="flex items-center gap-2 text-sm text-purple-600 px-2">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isSpeaking ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
          <span className="text-center">
            {isSpeaking ? 'Malbe está hablando...' : 'Malbe está escuchando'}
          </span>
        </div>
      )}

      <p className="text-xs text-gray-500 text-center px-4 leading-relaxed">
        {!isPermissionGranted 
          ? 'Necesitamos acceso a tu micrófono para que puedas conversar con Malbe'
          : 'Haz clic para iniciar una conversación por voz con Malbe'
        }
      </p>
    </div>
  );
};

export default ConversationButton;
