using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DataModels.Dtos;
using DataModels.Models.Tweets;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MyTweetAPI.Services.Contracts;
using WebApi.Helpers;
using Microsoft.AspNetCore.Authorization;

namespace MyTweetAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class TweetsController : ControllerBase
    {
        private ITweetService _tweetsService;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public TweetsController(
            ITweetService tweetsService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _tweetsService = tweetsService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var tweets = _tweetsService.GetAll();
            var tweetDtos = _mapper.Map<IList<TweetDto>>(tweets);
            return Ok(tweetDtos);
        }

        [HttpPost("tweet")]
        public IActionResult Tweet([FromBody]UserDto userDto)
        {
            // map dto to entity
            var user = _mapper.Map<Tweet>(userDto);

            try
            {
                // save 
                _tweetsService.Create(user, userDto.Password);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

    }
}