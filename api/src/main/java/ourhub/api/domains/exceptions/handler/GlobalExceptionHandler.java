package ourhub.api.domains.exceptions.handler;

public record GlobalExceptionHandler(
        String errorMessage,
        Integer status,
        String url
) {
}
