import { Controller, Post, Body } from '@nestjs/common';

@Controller('check')
export class AppController {
  @Post('letter-a')
  checkLetterA(@Body('input') input: string): any {
    if (!input) {
      return { message: 'A string está vazia.' };
    }

    const countA = (input.match(/a/gi) || []).length; // Contando 'a' e 'A'
    return { message: `A letra 'A' aparece ${countA} vezes na string.` };
  }
}
