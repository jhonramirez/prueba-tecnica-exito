import { I18n } from 'aws-amplify/utils';
import { translations } from "@aws-amplify/ui-react";
I18n.putVocabularies(translations);
I18n.setLanguage("es");

I18n.putVocabularies({
  es: {
    Email: "Correo electrónico",
    "Reset Password": "Restablecer la contraseña",
    "Enter your email": "Introduce tu correo electrónico",
    "User does not exist.": "El usuario no existe.",
    "Username/client id combination not found.":
      "No se encontró la combinación de nombre de usuario/ID de cliente.",
    "Please confirm your Password": "Por favor confirme su contraseña",
    "Password must have at least 8 characters":
      "La contraseña debe tener al menos 8 caracteres",
    "Invalid verification code provided, please try again.":
      "Se proporcionó un código de verificación no válido. Inténtelo de nuevo.",
  },
});
