import BaseCommand from '../../libs/BaseCommand.js'
import os from 'os'

export default class Command extends BaseCommand {
    constructor(client, handler) {
        super(client, handler, {
            command: 'info',
            aliases: ['i'],
            category: 'core',
            description: {
                content: "Displays the bot's info"
            },
            dm: true,
            exp: 1
        })
    }

    export default class extends BaseCommand {
    private imageUrls: string[] = [
        'http://yocliq.com/media/uploads/yocliq.com-26d152528efc8407d351bcb6c3c126f8.jpg',
        'https://telegra.ph/file/e9aa5e407abe6d7911ace.jpg',
    ]

    exec = async (M) => {
        const cpus = os.cpus()
        const randomImageUrl = this.imageUrls[Math.floor(Math.random() * this.imageUrls.length)]
        const image = await this.client.utils.getBuffer(randomImageUrl)
        return void (await M.reply( image, 'image', `*🔮𝘿𝘼𝘽𝙄 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊🔮*
        
🎋 *Users: ${(await this.client.DB.getAllUsers()).length}*
🎖️ *Groups: ${Object.keys(await this.client.groupFetchAllParticipating()).length}*
💬 *Platform: ${os.platform()}*
🌃 *Moderators: ${this.client.config.mods.length}*
🌀 *Commands: ${this.handler.commands.size}*
📚 *Cpu: ${cpus[0].model} ${cpus.length > 1 ? `(${cpus.length} core)` : ''}*`))
    }
}
