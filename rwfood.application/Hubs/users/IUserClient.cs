using rwfood.application.Hubs.model;

namespace rwfood.application.Hubs.users
{
    public interface IUserClient
    {
        Task ReceiveMessage(ChatMessage message);
        Task SendMessage(string operation, string message);

        Task SendMessageAll(string user, string message);
        Task SendMessageToCaller(string user, string message);
        Task SendMessageToGroup(string user, string message);
    }


}
