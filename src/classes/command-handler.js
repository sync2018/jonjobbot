module.exports = class Handler {
    
    constructor(prefix) {
        // Set prefix to be bot prefix
        this.prefix = prefix;
    }

    handleCommands = msg => {
        // Check message if it uses the prefix or sent by bot
        if (!msg.content.startsWith(this.prefix) || msg.author.bot) return;

        const args = msg.content.slice(this.prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        // Main switch block
        switch (command) {
            case 'ping':
                this.ping(msg);
                break;
            case 'yanyan':
                this.yanyan(msg);
                break;
            default:
                break;
        }
    }
    // Maybe put the commands in another class?
    ping = (msg, args) => {
        msg.channel.send('Pong');
    }

    yanyan = (msg, args) => {
        msg.channel.send('***YANYAN-CHAN YAMETE***');
    }


}