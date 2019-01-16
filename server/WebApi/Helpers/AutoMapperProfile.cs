using AutoMapper;
using DataModels.Dtos;
using DataModels.Models.Tweets;
using DataModels.Models.UserManagment;


namespace WebApi.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();

            CreateMap<Tweet, TweetDto>();
            CreateMap<TweetDto, Tweet>();
        }
    }
}