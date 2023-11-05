using Microsoft.AspNetCore.SignalR;
using MySqlX.XDevAPI;
using rwfood.application.Hubs.model;
using System.Text.RegularExpressions;

namespace rwfood.application.Hubs.users
{
    public class UserClient : Hub<IUserClient>
    {
        private readonly IHubContext<UserClient, IUserClient> _userClient;
        public UserClient(IHubContext<UserClient, IUserClient> userClient)
        {
            _userClient = userClient;
        }

        public async Task AddToGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
            await _userClient.Clients.Group(groupName).SendMessage("groupAdd", $"{Context.ConnectionId} você foi adicionado no grupo: {groupName}.");
        }

        public async Task RemoveFromGroup(string groupName)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
            await Clients.Group(groupName).SendMessage("groupRemove", $"{Context.ConnectionId} você foi removido do grupo {groupName}.");
        }


        public override Task OnConnectedAsync()
        {
            ConnectedUsers.ListConnectedUsers.Add(Context.ConnectionId);
            //Clients.Caller.SendMessageToCaller(Context.ConnectionId, "Seja bem-vindo");

            //Clients.Caller.send("ReceiveMessage", Context.ConnectionId, "Seja bem-vindo");
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            ConnectedUsers.ListConnectedUsers.Remove(Context.ConnectionId);
            return base.OnDisconnectedAsync(exception);
        }


        public async Task SendMessageToCaller(string user, string message)
        {
            //MS para todos
            await Clients.Caller.SendMessageToCaller(Context.ConnectionId, "Seja bem-vindo");
            await Clients.Client(Context.ConnectionId).ReceiveMessage(new ChatMessage { User = Context.UserIdentifier, Message = $"[{Context.ConnectionId}] Seja bem vindo" });


            //if (string.IsNullOrEmpty(user))
            //    await Clients.All.SendAsync("ReceiveMessage", user, message);
            //else
            //    await Clients.Client(user).SendAsync("ReceiveMessage", user, message);
        }

        //public async Task SendMessage(string user, string message)
        //{
        //    if (string.IsNullOrEmpty(user))
        //        await Clients.All.SendAsync("ReceiveMessage", user, message);
        //    else
        //        await Clients.Client(user).SendAsync("ReceiveMessage", user, message);
        //}
    }
}
