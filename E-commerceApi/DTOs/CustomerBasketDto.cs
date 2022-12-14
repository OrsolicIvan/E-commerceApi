using Core.Models;
using System.ComponentModel.DataAnnotations;

namespace E_commerceApi.DTOs
{
    public class CustomerBasketDto
    {
        [Required]
        public string Id { get; set; }
        public List<BasketItemDto> Items { get; set; }
    }
}
