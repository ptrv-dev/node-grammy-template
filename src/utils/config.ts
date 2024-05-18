class Config {
  private config: Map<string, string>;
  constructor() {
    this.config = new Map(
      Object.entries(process.env).map(([key, value]) => [key, value || ''])
    );
  }

  public get(key: string): string {
    const value = this.config.get(key);
    if (!value)
      throw new ConfigError(
        `ConfigError: Key ${key} not found in config dictionary!`
      );
    return value;
  }
}

export class ConfigError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const config = new Config();
