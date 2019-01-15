using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MyTweet.Helpers;

namespace MyTweet.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public UsersController(           
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {          
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }
    }
}