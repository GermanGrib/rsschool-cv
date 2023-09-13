import { parse, differenceInYears, isValid } from 'date-fns';

function calculateAge(dateString: string): number | null {
  const birthDate = parse(dateString, 'dd.MM.yyyy', new Date());

  if (!isValid(birthDate)) {
    return null;
  }

  const today = new Date();
  const age = differenceInYears(today, birthDate);
  return age;
}

export default calculateAge;
