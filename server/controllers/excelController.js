
import xlsx from "xlsx";
import prisma from "../db.js";
export const uploadExcel = async (req, res) => {
  try {
    const teacherId = req.user.id;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const workbook = xlsx.read(req.file.buffer);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);

    // Validate required headers
    const requiredHeaders = [
      "Student ID",
      "Student Name",
      "Course ID",
      "Course Title",
      "Tutorial-1",
      "Tutorial-2",
      "Tutorial-3",
      "Best of two tutorials",
      "Assignment",
      "Attendence",
      "Total Mark",
      "Comment",
    ];

    const headers = Object.keys(data[0] || {}).map((h) => h.trim());
    const missingHeaders = requiredHeaders.filter((h) => !headers.includes(h));

    if (missingHeaders.length > 0) {
      return res.status(400).json({
        error: `Missing required headers: ${missingHeaders.join(", ")}`,
      });
    }

    // Process each row
    const results = await prisma.$transaction(
      data.map((row) => {
        console.log(row["Course ID"]);
        return prisma.courseResult.create({
          data: {
            studentId: Number(row["Student ID"]),
            studentName: row["Student Name"],
            courseId: row["Course ID"],
            courseTitle: row["Course Title"],
            t1: Number(row["Tutorial-1"]),
            t2: Number(row["Tutorial-2"]),
            t3: Number(row["Tutorial-3"]),
            t4: row["Tutorial-4"] ? Number(row["Tutorial-4"]) : null,
            bestTwoTutorialMarks: Number(row["Best of two tutorials"]),
            assignment: Number(row["Assignment"]),
            attendance: Number(row["Attendence"]),
            totalMark: Number(row["Total Mark"]),
            comment: row["Comment"],
            teacherId: teacherId,
          },
        });
      })
    );

    res.status(201).json({
      message: "Excel data processed successfully",
      count: results.length,
    });
  } catch (error) {
    console.error("Error processing Excel:", error);
    res.status(500).json({
      error: "Error processing Excel file",
      details: error.message,
    });
  }
};

export const getData = async (req, res) => {
  const userData = await prisma.courseResult.findMany({
    where: {
      teacherId: req.user.id,
    },
    select: {
      courseTitle: true,
      courseId: true,
    },
  });
  res.status(201).json(userData);
};
export const postRoll = async (req, res) => {
  const userData = await prisma.setting.create({
    data: {
      userId: req.user.id,
      studentId: req.body.id,
    },
  });
  res.status(201).json(userData);
};
export const getallexcelData = async (req, res) => {
  const userData = await prisma.courseResult.findMany({
    where: {
      teacherId: req.user.id,
      courseTitle: req.params.title,
    },
  });
  res.status(201).json(userData);
};
