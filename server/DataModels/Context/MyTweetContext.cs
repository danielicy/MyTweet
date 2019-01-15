using DataModels.Models.UserManagment;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataModels.Context
{
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

       


        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        public void Commit()
        {
            this.SaveChanges();
        }

    }
}
