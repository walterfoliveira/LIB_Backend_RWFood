using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;

namespace rwfood.service.Services
{
    public class ServiceBase<D> : IServiceBase<D> where D : BaseDTO
    {
        protected IRepository<D> repository;
        protected ILog logger;

        public ServiceBase(IRepository<D> _repository, ILog _logger)
        {
            this.repository = _repository;
            this.logger = _logger;
        }

        public virtual int Add(D Obj)
        {
            return this.repository.Add(Obj);
        }

        public IEnumerable<D> GetAll(int _idCompany, int? _offset, ushort? _limit)
        {
            return this.repository.GetAll(_idCompany, _offset, _limit);
        }

        public D GetById(int _idCompany, int Id)
        {
            return this.repository.GetById(_idCompany, Id);
        }

        public virtual bool Remove(int _idCompany, int Id)
        {
            return this.repository.Remove(_idCompany, Id);
        }

        public virtual int Update(D Obj)
        {
            return this.repository.Update(Obj);
        }
    }
}
