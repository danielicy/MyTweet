using AutoMapper;
using DataModels.Dtos;
using DataModels.Models.Tweets;
using DataModels.Models.UserManagment;
using System.Linq;

namespace WebApi.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            //CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();



            CreateMap<Tweet, TweetDto>();
            CreateMap<TweetDto, Tweet>();

            CreateMap<Follower, FollowerDto>();
            CreateMap<FollowerDto, Follower>();


            CreateMap<User, UserDto>()
       .ForMember(dto => dto.Contacts, opt => opt
       .MapFrom(x => x.ContactUsers.
       Select(y => y.Contact).ToList()));
        }
    }
}