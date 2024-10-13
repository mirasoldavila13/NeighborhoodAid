import Report from '../models/reportAuthority';

// Create a new report
export const createReport = async (req, res) => {
  const { title, description, location, weatherData, contacted, email, phone } = req.body;
  const userId = req.user.id;

  try {
    const newReport = await Report.create({
      title,
      description,
      location,
      weatherData,
      contacted,
      email,
      phone,
      userId,
    });
    res.status(201).json(newReport);
  } catch (error) {
    console.error('Error creating report:', error);
    res.status(500).json({ error: 'Failed to create report' });
  }
};
