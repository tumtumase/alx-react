// task_4/dashboard/src/schema/courses.js
import { schema } from 'normalizr';

const course = new schema.Entity('courses');
const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, [course]);
  return {
    entities: normalizedData.entities.courses || {},
    result: normalizedData.result
  };
};

export { coursesNormalizer };
