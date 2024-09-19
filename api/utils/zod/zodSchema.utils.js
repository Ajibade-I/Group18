import zod from 'zod';

export const updateJobSeekerZodSchema = zod.object({
  username: zod.string().min(3).max(50).optional(),
  city: zod.string().min(3).max(50).optional(),
  state: zod.string().min(3).max(50).optional(),
  country: zod.string().min(3).max(50).optional(),
  skills: zod.array(zod.string()).optional(),
  experience: zod.array(
    zod.object({
      jobTitle: zod.string(),
      companyName: zod.string(),
      startDate: zod.date(),
      endDate: zod.date(),
      description: zod.string(),
    })
  ).optional(),
});
