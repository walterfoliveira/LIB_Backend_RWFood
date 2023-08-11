using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.data.Repository
{
    public class RepositoryBase<D, E> : IRepository<D>
        where D : BaseDTO
        where E : BaseEntity
    {

        public readonly MySqlDbContext context;

        public RepositoryBase(MySqlDbContext _context)
        {
            this.context = _context;

            JsonConvert.DefaultSettings = () => new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };
        }

        public virtual IEnumerable<D> GetAll(int _idCompany, int? _offset, ushort? _limit)
        {
            var query = (from r in this.context.Set<E>()
                         where r.IdCompany == _idCompany
                         orderby r.Id
                         select r);
            //if (_offset == null)
            //    _offset = 0;
            //if (_limit == null)
            //    _limit = 100;

            //if (_offset != null && _limit != null)
            //    query = (IOrderedQueryable<E>)query.Skip((int)_offset).Take((ushort)_limit);

            return JsonConvert.DeserializeObject<IEnumerable<D>>(JsonConvert.SerializeObject(query.AsEnumerable()));
        }

        public virtual D GetById(int idCompany, int id)
        {
            var entity = (from e in this.context.Set<E>()
                              //where id.Equals(e.Id)
                          where e.IdCompany == (int)idCompany && e.Id == (int)id
                          select e).FirstOrDefault();

            return JsonConvert.DeserializeObject<D>(JsonConvert.SerializeObject(entity));
        }

        public int Add(D Obj)
        {
            E entity = JsonConvert.DeserializeObject<E>(JsonConvert.SerializeObject(Obj));
            this.context.Set<E>().Add(entity);
            this.context.SaveChanges();

            Obj.Id = entity.Id;
            return Obj.Id;
        }

        public int Update(D Obj)
        {
            E entity = JsonConvert.DeserializeObject<E>(JsonConvert.SerializeObject(Obj));
            this.context.Entry(entity).State = EntityState.Modified;
            this.context.Set<E>().Update(entity);

            this.context.SaveChanges();

            Obj.Id = entity.Id;
            return Obj.Id;
        }

        public bool Remove(int idCompany, int id)
        {
            var entity = this.context.Find<E>(id);
            if (entity != null && idCompany == entity.IdCompany) 
            {
                var deleteEntity = this.context.Set<E>().Remove(entity);
                var result = deleteEntity.State == EntityState.Deleted;

                this.context.SaveChanges();

                return result;
            }

            return false;

        }
 
    }
}