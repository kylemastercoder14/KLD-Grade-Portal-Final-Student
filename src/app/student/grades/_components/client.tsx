"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCourse } from "@/data/course";
import { useGetGrades } from "@/data/grades";
import { Courses } from "@prisma/client";
import { Loader2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const GradeClient = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const {
    data: gradesData,
    error: gradesError,
    isLoading: gradesLoading,
  } = useGetGrades();
  const {
    data: courseData,
    error: courseError,
    isLoading: courseLoading,
  } = useGetCourse();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (gradesError || courseError) {
      toast.error(
        gradesError?.message || courseError?.message || "An error occurred"
      );
    }
  }, [gradesError, courseError]);

  if (!isMounted) {
    return null;
  }

  const getCourseDetails = (courseCode: string): Partial<Courses> => {
    return courseData?.data?.find((course) => course.code === courseCode) || {};
  };

  return (
    <Tabs defaultValue="ecog">
      <TabsList>
        <TabsTrigger value="ecog">Electronic Grades</TabsTrigger>
        <TabsTrigger value="curriculum-checklist">
          Curriculum Checklist
        </TabsTrigger>
      </TabsList>
      <TabsContent value="ecog">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Academic Year</TableHead>
              <TableHead>Semester</TableHead>
              <TableHead>Course Title</TableHead>
              <TableHead>Units</TableHead>
              <TableHead>Final</TableHead>
              <TableHead>Remarks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gradesLoading || courseLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  <div className="flex mt-3 items-center justify-center">
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                </TableCell>
              </TableRow>
            ) : gradesData?.data?.length ?? 0 > 0 ? (
              gradesData?.data?.map((grade) => {
                const course = getCourseDetails(grade.courseCode);
                return (
                  <TableRow key={grade.id}>
                    <TableCell>2024-2025</TableCell>
                    <TableCell>1ST SEMESTER</TableCell>
                    <TableCell>
                      {course.name || "N/A"} ({course.code})
                    </TableCell>
                    <TableCell>{course.unit || "N/A"}</TableCell>
                    <TableCell>{grade.grade.toFixed(2)}</TableCell>
                    <TableCell>
                      <span
                        className={`font-semibold ${
                          grade.remarks === "PASSED"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {grade.remarks}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No grades found yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="curriculum-checklist">
        {/* <h4 className="text-center">Complete Curriculum Checklist</h4> */}
        <Separator className="my-2" />
        <p className="text-center font-semibold">1ST YEAR</p>
        <Separator className="my-2" />
        <div className="flex md:flex-row flex-col w-full md:items-center items-start gap-4">
          <div className="w-full mt-2">
            <p className="text-center font-semibold">1ST SEMESTER</p>
            <Table className="pr-2 border-x">
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Units</TableHead>
                  <TableHead>Final</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradesLoading || courseLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      <div className="flex mt-3 items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  gradesData?.data?.map((grade) => {
                    const course = getCourseDetails(grade.courseCode);
                    return (
                      <TableRow key={grade.id}>
                        <TableCell>
                          {course.name || "N/A"} ({course.code})
                        </TableCell>
                        <TableCell>{course.unit || "N/A"}</TableCell>
                        <TableCell>{grade.grade.toFixed(2)}</TableCell>
                        <TableCell>
                          <span
                            className={`font-semibold ${
                              grade.remarks === "PASSED"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {grade.remarks}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
          <div className="w-full mt-2">
            <p className="text-center font-semibold">2ND SEMESTER</p>
            <Table className="pr-2 border-x">
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Units</TableHead>
                  <TableHead>Final</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradesLoading || courseLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      <div className="flex mt-3 items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  gradesData?.data?.map((grade) => {
                    const course = getCourseDetails(grade.courseCode);
                    return (
                      <TableRow key={grade.id}>
                        <TableCell>
                          {course.name || "N/A"} ({course.code})
                        </TableCell>
                        <TableCell>{course.unit || "N/A"}</TableCell>
                        <TableCell>{grade.grade.toFixed(2)}</TableCell>
                        <TableCell>
                          <span
                            className={`font-semibold ${
                              grade.remarks === "PASSED"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {grade.remarks}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        {/* <Separator className="my-2" /> */}
        <p className="text-center font-semibold mt-3">2ND YEAR</p>
        <Separator className="my-2" />
        <div className="flex md:flex-row flex-col w-full md:items-center items-start gap-4">
          <div className="w-full mt-2">
            <p className="text-center font-semibold">1ST SEMESTER</p>
            <Table className="pr-2 border-x">
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Units</TableHead>
                  <TableHead>Final</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradesLoading || courseLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      <div className="flex mt-3 items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  gradesData?.data?.map((grade) => {
                    const course = getCourseDetails(grade.courseCode);
                    return (
                      <TableRow key={grade.id}>
                        <TableCell>
                          {course.name || "N/A"} ({course.code})
                        </TableCell>
                        <TableCell>{course.unit || "N/A"}</TableCell>
                        <TableCell>{grade.grade.toFixed(2)}</TableCell>
                        <TableCell>
                          <span
                            className={`font-semibold ${
                              grade.remarks === "PASSED"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {grade.remarks}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
          <div className="w-full mt-2">
            <p className="text-center font-semibold">2ND SEMESTER</p>
            <Table className="pr-2 border-x">
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Units</TableHead>
                  <TableHead>Final</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradesLoading || courseLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      <div className="flex mt-3 items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  gradesData?.data?.map((grade) => {
                    const course = getCourseDetails(grade.courseCode);
                    return (
                      <TableRow key={grade.id}>
                        <TableCell>
                          {course.name || "N/A"} ({course.code})
                        </TableCell>
                        <TableCell>{course.unit || "N/A"}</TableCell>
                        <TableCell>{grade.grade.toFixed(2)}</TableCell>
                        <TableCell>
                          <span
                            className={`font-semibold ${
                              grade.remarks === "PASSED"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {grade.remarks}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        <p className="text-center font-semibold mt-3">3RD YEAR</p>
        <Separator className="my-2" />
        <div className="flex md:flex-row flex-col w-full md:items-center items-start gap-4">
          <div className="w-full mt-2">
            <p className="text-center font-semibold">1ST SEMESTER</p>
            <Table className="pr-2 border-x">
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Units</TableHead>
                  <TableHead>Final</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradesLoading || courseLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      <div className="flex mt-3 items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  gradesData?.data?.map((grade) => {
                    const course = getCourseDetails(grade.courseCode);
                    return (
                      <TableRow key={grade.id}>
                        <TableCell>
                          {course.name || "N/A"} ({course.code})
                        </TableCell>
                        <TableCell>{course.unit || "N/A"}</TableCell>
                        <TableCell>{grade.grade.toFixed(2)}</TableCell>
                        <TableCell>
                          <span
                            className={`font-semibold ${
                              grade.remarks === "PASSED"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {grade.remarks}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
          <div className="w-full mt-2">
            <p className="text-center font-semibold">2ND SEMESTER</p>
            <Table className="pr-2 border-x">
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Units</TableHead>
                  <TableHead>Final</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradesLoading || courseLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      <div className="flex mt-3 items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  gradesData?.data?.map((grade) => {
                    const course = getCourseDetails(grade.courseCode);
                    return (
                      <TableRow key={grade.id}>
                        <TableCell>
                          {course.name || "N/A"} ({course.code})
                        </TableCell>
                        <TableCell>{course.unit || "N/A"}</TableCell>
                        <TableCell>{grade.grade.toFixed(2)}</TableCell>
                        <TableCell>
                          <span
                            className={`font-semibold ${
                              grade.remarks === "PASSED"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {grade.remarks}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        <p className="text-center font-semibold mt-3">4TH YEAR</p>
        <Separator className="my-2" />
        <div className="flex md:flex-row flex-col w-full md:items-center items-start gap-4">
          <div className="w-full mt-2">
            <p className="text-center font-semibold">1ST SEMESTER</p>
            <Table className="pr-2 border-x">
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Units</TableHead>
                  <TableHead>Final</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradesLoading || courseLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      <div className="flex mt-3 items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  gradesData?.data?.map((grade) => {
                    const course = getCourseDetails(grade.courseCode);
                    return (
                      <TableRow key={grade.id}>
                        <TableCell>
                          {course.name || "N/A"} ({course.code})
                        </TableCell>
                        <TableCell>{course.unit || "N/A"}</TableCell>
                        <TableCell>{grade.grade.toFixed(2)}</TableCell>
                        <TableCell>
                          <span
                            className={`font-semibold ${
                              grade.remarks === "PASSED"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {grade.remarks}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
          <div className="w-full mt-2">
            <p className="text-center font-semibold">2ND SEMESTER</p>
            <Table className="pr-2 border-x">
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Units</TableHead>
                  <TableHead>Final</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradesLoading || courseLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      <div className="flex mt-3 items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  gradesData?.data?.map((grade) => {
                    const course = getCourseDetails(grade.courseCode);
                    return (
                      <TableRow key={grade.id}>
                        <TableCell>
                          {course.name || "N/A"} ({course.code})
                        </TableCell>
                        <TableCell>{course.unit || "N/A"}</TableCell>
                        <TableCell>{grade.grade.toFixed(2)}</TableCell>
                        <TableCell>
                          <span
                            className={`font-semibold ${
                              grade.remarks === "PASSED"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {grade.remarks}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default GradeClient;
