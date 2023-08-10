using rwfood.domain.Dto;
using System.Collections.Generic;

namespace rwfood.domain.Interfaces.Services
{
    public interface IServiceBase<T> where T : BaseDTO
    {
        int Add(T Obj);
        int Update(T Obj);
        bool Remove(int Id);
        IEnumerable<T> GetAll(int? _offset, ushort? _limit);
        T GetById(int Id);
    }
}
