using System.ComponentModel.DataAnnotations;

namespace E_commerceApi.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}", ErrorMessage = "Password must have 1 Uppercase, 1 lowercase, 1 number, and at least 8 characters")]
        public string Password { get; set; }
    }
}