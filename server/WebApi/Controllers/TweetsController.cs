using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MyTweetAPI.Services.Contracts;
using WebApi.Helpers;

namespace MyTweetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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

    }
}