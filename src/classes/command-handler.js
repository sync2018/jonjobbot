module.exports = class Handler {
    
    /**
     * Set prefix to be used by Handler
     * @param {String} prefix 
     */
    constructor(prefix) {
        // Set prefix to be bot prefix
        this.prefix = prefix;
    }

    /**
     * Main handler method
     * @param {Message} msg 
     */
    handleCommands = msg => {
        // Check message if it uses the prefix or sent by bot
        if (!msg.content.startsWith(this.prefix) || msg.author.bot) return;

        //Take arguments from message
        const args = msg.content.slice(this.prefix.length).split(/ +/);
        //First arg after prefix is the command
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

    /**
     * Basic sample command
     * @param {Message} msg 
     * @param {Array} args 
     */
    ping = (msg, args) => {
        msg.channel.send('Pong');
    }

    yanyan = (msg, args) => {
        msg.channel.send('***YANYAN-CHAN YAMETE***');
    }


}