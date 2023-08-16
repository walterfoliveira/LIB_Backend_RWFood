using System;
using rwfood.domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

#nullable disable

namespace rwfood.data.Context
{
    public partial class MySqlDbContext : DbContext
    {
        public MySqlDbContext()
        {
        }

        public MySqlDbContext(DbContextOptions<MySqlDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Company> Company { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Complement> Complement { get; set; }
        public virtual DbSet<DeliveryMan> DeliveryMan { get; set; }
        public virtual DbSet<Person> Person { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Users> Users { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
                //optionsBuilder.UseLoggerFactory(LoggerFactory.Create(builder => builder.AddDebug()));
                optionsBuilder.EnableSensitiveDataLogging().EnableDetailedErrors();
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                //optionsBuilder.UseMySQL("server=localhost;port=3307;user=walter;password=Done@2020;Database=rwfood");
                optionsBuilder.UseMySQL("server=rwconsultoria.ddns.net;port=3307;user=walter;password=Done@2020;Database=rwfood");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Company>(entity =>
            {
                entity.ToTable("company", "rwfood");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.Status)
                    .HasColumnType("int(11)")
                    .HasColumnName("status");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createdAt");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.Telefone)
                    .HasMaxLength(100)
                    .HasColumnName("telefone");

                entity.Property(e => e.Site)
                    .HasMaxLength(100)
                    .HasColumnName("site");

                entity.Property(e => e.Funcionamento)
                    .HasMaxLength(100)
                    .HasColumnName("funcionamento");

            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("category", "rwfood");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.IdCompany)
                    .HasColumnType("int(11)")
                    .HasColumnName("idCompany");

                entity.Property(e => e.Status)
                    .HasColumnType("int(11)")
                    .HasColumnName("status");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createdAt");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

            });

            modelBuilder.Entity<Complement>(entity =>
            {
                entity.ToTable("complement", "rwfood");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.IdCompany)
                    .HasColumnType("int(11)")
                    .HasColumnName("idCompany");

                entity.Property(e => e.Status)
                    .HasColumnType("int(11)")
                    .HasColumnName("status");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createdAt");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

            });

            modelBuilder.Entity<DeliveryMan>(entity =>
            {
                entity.ToTable("deliveryman", "rwfood");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.IdCompany)
                    .HasColumnType("int(11)")
                    .HasColumnName("idCompany");

                entity.Property(e => e.Status)
                    .HasColumnType("int(11)")
                    .HasColumnName("status");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createdAt");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.Cell)
                    .HasMaxLength(20)
                    .HasColumnName("cell");

            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.ToTable("person", "rwfood");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.IdCompany)
                    .HasColumnType("int(11)")
                    .HasColumnName("idCompany");

                entity.Property(e => e.Status)
                    .HasColumnType("int(11)")
                    .HasColumnName("status");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createdAt");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.Surname)
                    .HasMaxLength(100)
                    .HasColumnName("surname");

                entity.Property(e => e.Cell)
                    .HasMaxLength(20)
                    .HasColumnName("cell");

                entity.Property(e => e.Document)
                    .HasMaxLength(20)
                    .HasColumnName("document");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("product", "rwfood");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.IdCompany)
                    .HasColumnType("int(11)")
                    .HasColumnName("idCompany");

                entity.Property(e => e.Status)
                    .HasColumnType("int(11)")
                    .HasColumnName("status");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createdAt");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .HasColumnName("description");

                entity.Property(e => e.Code1)
                    .HasMaxLength(50)
                    .HasColumnName("code1");

                entity.Property(e => e.Code2)
                    .HasMaxLength(50)
                    .HasColumnName("code2");

                entity.Property(e => e.Amount1)
                    .HasColumnType("decimal(10,2)")
                    .HasColumnName("amount1");

                entity.Property(e => e.Amount2)
                    .HasColumnType("decimal(10,2)")
                    .HasColumnName("amount2");

                entity.Property(e => e.Amount3)
                    .HasColumnType("decimal(10,2)")
                    .HasColumnName("amount3");

                entity.Property(e => e.Amount4)
                    .HasColumnType("decimal(10,2)")
                    .HasColumnName("amount4");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("users", "rwfood");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.IdCompany)
                    .HasColumnType("int(11)")
                    .HasColumnName("idCompany");

                entity.Property(e => e.Status)
                    .HasColumnType("int(11)")
                    .HasColumnName("status");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createdAt");

                entity.Property(e => e.Updated)
                    .HasColumnType("datetime")
                    .HasColumnName("updated");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.Surname)
                    .HasMaxLength(100)
                    .HasColumnName("surname");

                entity.Property(e => e.Cell)
                    .HasMaxLength(20)
                    .HasColumnName("cell");

                entity.Property(e => e.Document)
                    .HasMaxLength(20)
                    .HasColumnName("document");

                entity.Property(e => e.Mail)
                    .HasMaxLength(100)
                    .HasColumnName("mail");

                entity.Property(e => e.Pass)
                    .HasMaxLength(100)
                    .HasColumnName("pass");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
