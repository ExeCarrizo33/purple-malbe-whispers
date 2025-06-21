
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
        agentId: 'agent_01jy9zgr8yejga3h1gk8s5hz4m'
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
    <div className="flex flex-col items-center gap-4">
      {!isPermissionGranted ? (
        <Button
          onClick={requestMicrophonePermission}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-glow"
        >
          <Mic className="w-5 h-5 mr-2" />
          Activar Micrófono
        </Button>
      ) : (
        <Button
          onClick={isConnected ? endConversation : startConversation}
          disabled={isConnecting}
          size="lg"
          className={`px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
            isConnected 
              ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 animate-pulse' 
              : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 animate-glow'
          } text-white`}
        >
          {isConnecting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Conectando...
            </>
          ) : isConnected ? (
            <>
              <PhoneOff className="w-5 h-5 mr-2" />
              Terminar Llamada
            </>
          ) : (
            <>
              <Phone className="w-5 h-5 mr-2" />
              Hablar con Malbe
            </>
          )}
        </Button>
      )}

      {isConnected && (
        <div className="flex items-center gap-2 text-sm text-purple-600">
          <div className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
          {isSpeaking ? 'Malbe está hablando...' : 'Malbe está escuchando'}
        </div>
      )}

      <p className="text-xs text-gray-500 text-center max-w-xs">
        {!isPermissionGranted 
          ? 'Necesitamos acceso a tu micrófono para que puedas conversar con Malbe'
          : 'Haz clic para iniciar una conversación por voz con Malbe'
        }
      </p>
    </div>
  );
};

export default ConversationButton;
