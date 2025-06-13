<?php
namespace Neszion\Models\Usuario;

class PrivacidadUsuarioModel
{
    public function getVisibilidadPerfil(string $userId)
    {
        try {
            // Existing logic goes here
        } catch (\Exception $e) {
            // Log the error message to two different log files
            $message = "\n" . $e->getMessage();
            error_log($message, 3, __DIR__ . '/../../logs/db_errors.log');
            error_log($message, 3, __DIR__ . '/../../logs/app_errors.log');
            throw $e; // rethrow or handle as needed
        }
    }
}
