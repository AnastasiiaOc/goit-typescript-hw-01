
//  в type Page  accounts: [string, string, string] вказали три позиційни параметри string. Але в  page2  лише однезначення. Тому краще string[] так. Також details?: {createAt: never, updateAt: never} createAt і updateAt це тип даних Date. І потрібно 
// типізувати об'єкти  page1 і  page2 створеним type Page  

type Page = {title: string, likes: number, accounts: string[], status: string, details?: {createAt: Date, updateAt: Date}}
const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}



// Створіть новий тип даних, який підходить для цих двох об'єктів.