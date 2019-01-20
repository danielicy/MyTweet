using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataModels.Models.UserManagment
{ 
    [Table("followers")]
    public class Follower
    {       
        [Key, Column("userid")]
        public int UserId { get; set; }
        public virtual User User { get; set; }

        [Column("followedid")]
        public int FollowedId { get; set; }
        public virtual User Contact { get; set; }
    }
}
