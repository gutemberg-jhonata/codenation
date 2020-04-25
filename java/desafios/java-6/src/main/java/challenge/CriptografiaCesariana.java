package challenge;

public class CriptografiaCesariana implements Criptografia {

    @Override
    public String criptografar(String texto) {
        String decipherText = "";

        if (texto == null)
            throw new NullPointerException();
        if (texto.isEmpty())
            throw new IllegalArgumentException();

        texto = texto.toLowerCase();
        for (char character: texto.toCharArray()) {
            if (character >= 'a' && character <= 'z') {
                int n = character + 3;
                if (n > 122) {
                    n = 97 + (n - 123);
                }
                decipherText += (char) n;
            } else {
                decipherText += character;
            }
        }
        return decipherText;
    }

    @Override
    public String descriptografar(String texto) {
        String cipherText = "";

        if (texto == null)
            throw new NullPointerException();
        if (texto.isEmpty())
            throw new IllegalArgumentException();

        texto = texto.toLowerCase();
        for (char character: texto.toCharArray()) {
            if (character >= 'a' && character <= 'z') {
                int n = character - 3;
                if (n < 97) {
                    n = 122 + (n - 96);
                }
                cipherText += (char) n;
            } else {
                cipherText += character;
            }
        }
        return cipherText;
    }
}
