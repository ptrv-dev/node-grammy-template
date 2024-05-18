import { Bot, type Context } from 'grammy';
import { hydrateReply, parseMode, ParseModeFlavor } from '@grammyjs/parse-mode';
import { randomBytes } from 'crypto';
import { config, logger } from '@/utils';

const BOT_TOKEN = config.get('BOT_TOKEN');

const bot = new Bot<ParseModeFlavor<Context>>(BOT_TOKEN);

bot.use(hydrateReply);
bot.api.config.use(parseMode('HTML'));

bot.start({
  onStart: ({ username }) => {
    logger.success(`Telegram Bot @${username} successfully started.`);
  },
});

bot.catch(({ ctx, name, message, stack }) => {
  const code = randomBytes(4).toString('hex');
  logger.error(
    `Telegram Bot unhandled error! #${code}\n${name}\n${message}\n${stack}`
  );
  ctx.reply(
    `<b>💢 Непредвиденная ошибка! 💢</b>\n\nВозникла непредвиденная ошибка при работе бота. Пожалуйста попробуйте воспользоваться ботом ещё раз. Если ошибка повторяется обратитесь к тех. поддержке.\n\nКод ошибки: <code>${code}</code>`
  );
});
