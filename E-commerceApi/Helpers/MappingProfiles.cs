using AutoMapper;
using Core.Models;
using Core.Models.Identity;
using E_commerceApi.DTOs;

namespace E_commerceApi.Helpers
{
    public class MappingProfiles: Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.ProductBrand, o => o.MapFrom(s => s.ProductBrand.Name))
                .ForMember(d => d.ProductType, o => o.MapFrom(s => s.ProductType.Name))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductUrlResolver>()).ReverseMap();
            CreateMap<Address, AddressDto>().ReverseMap();
        }
        
    }
}
