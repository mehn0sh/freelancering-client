import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import useCategories from "../../hooks/useCategories";
import DatePickerField from "../../ui/DatePickerField";
import Loading from "../../ui/Loading";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import useCreateProject from "./useCreateProject";
import useEditProject from "./UseEditeProject";
const CreateProjectForm = ({ onClose, projectToEdit = {} }) => {
  const [tags, setTags] = useState(projectToEdit?.tags || []);
  const [date, setDate] = useState(projectToEdit?.deadline || new Date());
  const { newCategories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const { isEditing, editProject } = useEditProject();
  let editValues = {};
  if (isEditSession) {
    const { title, description, budget, category } = projectToEdit;
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }
  // useEffect(() => {
  //   console.log(data);
  //   const fetchData = async () => {
  //     try {
  //       await axios.get("http://localhost:5000/api/category/list").then((res) =>
  //         setnewCat(
  //           res.data.data.categories.map((item) => ({
  //             label: item.title,
  //             value: item._id,
  //           }))
  //         )
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  ///////////////
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });
  const onSubmit = async (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose(), reset();
        },
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <TextField
        label="عنوان"
        name="title"
        required
        register={register}
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 5,
            message: "حداقل 5 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        required
        register={register}
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 20,
            message: "حداقل 20 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        required
        type="number"
        register={register}
        validationSchema={{
          required: "وارد کردن بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        name="category"
        label="دسته بندی"
        register={register}
        options={newCategories}
        required
      />
      <label className="block mb-2 text-secondary-700">تگ ها</label>
      <TagsInput
        id="tags"
        value={tags}
        onChange={setTags}
        name="tags"
        classNames={{ input: "" }}
      />
      <DatePickerField date={date} setDate={setDate} />
      <div className="mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full mt-5" type="submit">
            ایجاد
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateProjectForm;
