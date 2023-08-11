using rwfood.domain.Dto;
using System.Collections.Generic;

namespace rwfood.domain.Interfaces.Repositories
{
    public interface IRepository<D> where D : BaseDTO
    {
        int Add(D Obj);
        int Update(D Obj);
        bool Remove(int _idCompany, int id);
        IEnumerable<D> GetAll(int _idCompany, int? _offset, ushort? _limit);
        D GetById(int _idCompany, int id);
    }
}
