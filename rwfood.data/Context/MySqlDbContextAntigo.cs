using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace rwfood.data.Context
{
    public partial class MySqlDbContextAntigo : DbContext
    {
        public MySqlDbContextAntigo()
        {
        }

        public MySqlDbContextAntigo(DbContextOptions<MySqlDbContextAntigo> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=walter;password=Done@2022;Database=pizzaria", Microsoft.EntityFrameworkCore.ServerVersion.Parse("5.0.96-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {   

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
