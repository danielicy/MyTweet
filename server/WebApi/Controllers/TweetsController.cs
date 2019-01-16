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
using DataModels.Models.UserManagment;

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
        public IActionResult Tweet([FromBody]TweetDto tweetDto)
        {
            // map dto to entity
            var tweet = _mapper.Map<Tweet>(tweetDto);

            try
            {
                // save 
                _tweetsService.Create(tweet,null);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("follow")]
        public IActionResult Follow([FromBody]FollowerDto tweetDto)
        {
            // map dto to entity
            var follower = _mapper.Map<Follower>(tweetDto);

            try
            {
                // save 
                _tweetsService.Follow(follower);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("unfollow")]
        public IActionResult UnFollow([FromBody]FollowerDto tweetDto)
        {
            // map dto to entity
            var follower = _mapper.Map<Follower>(tweetDto);

            try
            {
                // save 
                _tweetsService.UnFollow(follower);
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