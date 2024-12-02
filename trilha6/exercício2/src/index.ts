class EmailNotification {
  sendEmail(username: string): void {
    console.log(`Enviando email para ${username}...`);
  }
}

class UserManager {
  private users: string[] = [];
  private emailNotification: EmailNotification;

  constructor(emailNotification: EmailNotification) {
    this.emailNotification = emailNotification;
  }

  createUser(username: string): void {
    this.users.push(username);
    console.log(`Usuário ${username} criado com sucesso!`);
    this.emailNotification.sendEmail(username); 
  }

  getUsers(): string[] {
    return this.users;
  }
}

const emailNotification = new EmailNotification();
const userManager = new UserManager(emailNotification);

userManager.createUser("Hamilton");
userManager.createUser("Verstapen");

console.log("Usuários:", userManager.getUsers());

