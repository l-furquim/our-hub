package ourhub.api.domains.exceptions;

public class InvalidAuthException extends RuntimeException {
  public InvalidAuthException(String message) {
    super(message);
  }
}
