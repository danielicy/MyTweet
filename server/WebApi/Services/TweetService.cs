﻿using DataCore;
using DataModels.Models.Tweets;
using MyTweetAPI.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyTweetAPI.Services
{
    public class TweetService : ITweetService
    {
        private MyTweetContext _context;

        public TweetService(MyTweetContext context)
        {
            _context = context;
        }

        public Tweet Create(Tweet model, string param)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Tweet> GetAll()
        {
            throw new NotImplementedException();
        }

        public Tweet GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Tweet Tweet(string content)
        {
            throw new NotImplementedException();
        }

        public void Update(Tweet model, string param = null)
        {
            throw new NotImplementedException();
        }
    }
}