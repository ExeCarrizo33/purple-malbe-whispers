import React, { useState, useEffect } from 'react';
import { useConversation } from '@11labs/react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, Phone, PhoneOff, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const ConversationButton = () => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

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
      console.log('Mensaje recibido del agente de voz:', message);

      try {
        // El webhook devuelve JSON con instrucciones de navegación
        const parsed = JSON.parse(message.message);
        handleStructuredResponse(parsed);
      } catch {
        // Si no es JSON estructurado, es una respuesta normal del agente
        console.log("Respuesta normal del agente:", message.message);
      }
    }
  });

  // Función para manejar respuestas estructuradas del webhook
  const handleStructuredResponse = (data) => {
    console.log('Respuesta del webhook:', data);
    
    switch(data.type) {
      case 'navigation':
        handleNavigation(data);
        break;
      case 'conversation':
        // Conversación normal, el agente sigue hablando
        console.log('Conversación continúa:', data.message);
        break;
      case 'end':
        handleEndConversation(data);
        break;
      default:
        // Si tiene redirect, asumir navegación
        if (data.redirect) {
          handleNavigation(data);
        }
    }
  };

  // Función para manejar navegación
  const handleNavigation = (data) => {
    console.log('Navegando por comando de voz:', data);
    
    setIsNavigating(true);
    
    // Mostrar toast de navegación
    toast({
      title: "🎯 Navegando",
      description: data.message || `Llevándote a la sección solicitada`,
      duration: 2500,
    });

    // Navegar después de que el agente termine de hablar
    setTimeout(() => {
      navigate(data.redirect);
      setIsNavigating(false);
      
      // Terminar la conversación después de navegar
      setTimeout(() => {
        conversation.endSession();
      }, 500);
    }, 2500);
  };

  // Función para manejar fin de conversación
  const handleEndConversation = (data) => {
    console.log('Finalizando conversación por voz:', data);
    
    toast({
      title: "👋 ¡Hasta pronto!",
      description: data.message || "Gracias por conversar con Malbe",
      duration: 3000,
    });

    setTimeout(() => {
      conversation.endSession();
    }, 1500);
  };

  // Hide toasts when conversation is active
  useEffect(() => {
    const toastContainer = document.querySelector('[data-sonner-toaster]') || 
                          document.querySelector('.toast-viewport') ||
                          document.querySelector('[data-radix-toast-viewport]');
    
    if (toastContainer) {
      if (conversation.status === 'connected' && !isNavigating) {
        (toastContainer as HTMLElement).style.display = 'none';
      } else {
        (toastContainer as HTMLElement).style.display = '';
      }
    }
  }, [conversation.status, isNavigating]);

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
        agentId: 'agent_01jyqnjg9jeca9v1h5pd2244v3'
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
          disabled={isConnecting || isNavigating}
          size="lg"
          className={`px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full min-h-[56px] sm:min-h-[64px] ${
            isNavigating
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 animate-pulse'
              : isConnected 
                ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 animate-pulse' 
                : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 animate-glow'
          } text-white`}
        >
          {isNavigating ? (
            <>
              <Navigation className="w-5 h-5 mr-2 flex-shrink-0 animate-spin" />
              <span className="truncate">Navegando...</span>
            </>
          ) : isConnecting ? (
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

      {isConnected && !isNavigating && (
        <div className="flex items-center gap-2 text-sm text-purple-600 px-2">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isSpeaking ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
          <span className="text-center">
            {isSpeaking ? 'Malbe está hablando...' : 'Malbe está escuchando'}
          </span>
        </div>
      )}

      {isNavigating && (
        <div className="flex items-center gap-2 text-sm text-blue-600 px-2">
          <Navigation className="w-4 h-4 animate-spin" />
          <span className="text-center">Preparando navegación...</span>
        </div>
      )}

      <p className="text-xs text-gray-500 text-center px-4 leading-relaxed">
        {!isPermissionGranted 
          ? 'Necesitamos acceso a tu micrófono para que puedas conversar con Malbe'
          : isNavigating
            ? 'Malbe te está llevando a donde necesitas ir'
            : 'Haz clic para iniciar una conversación por voz con Malbe'
        }
      </p>
    </div>
  );
};

export default ConversationButton;
