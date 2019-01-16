using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataModels.Models.UserManagment
{ 
    [Table("followers")]
    public class Follower
    {
        [Key, Column("id")]
        public int Id { get; set; }

        [Column("userid")]
        public int UserId { get; set; }

        [Column("followeduserid")]
        public int FollowedId { get; set; }

        [ForeignKey("UserId")]
        public User Follow { get; set; }

        [ForeignKey("FollowedId")]
        public User Followed { get; set; }
    }
}
