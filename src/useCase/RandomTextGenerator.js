export const generateRandomText = () => {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < 7; i++) {
          result += letters[Math.floor(Math.random() * letters.length)];
        }
        return result;
      }
