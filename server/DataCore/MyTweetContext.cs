using System;
using DataModels.Models.Tweets;
using DataModels.Models.UserManagment;
using Microsoft.EntityFrameworkCore;


namespace DataCore
{
    //[DbConfigurationType(typeof(MySqlConfiguration))]
    public class MyTweetContext : DbContext
    {

        public MyTweetContext()
        {

        }
        public MyTweetContext(DbContextOptions<MyTweetContext> options) : base(options)
        {
           
        }

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {            
            base.OnModelCreating(modelBuilder);          
           
        }

        private Boolean DoMore(int v)
        {
            return true;
        }

        private int DoSomething(Boolean v)
        {
            return 0;
        }

        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Tweet> Tweets { get; set; }




        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
             
        }

        public void Commit()
        {
            this.SaveChanges();
        }

    }
}

