import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { monsterService } from "../services/monster.service";
import { LayoutBase } from "../components/layoutBase/Layout";

const initialFormState = {
  name: "",
  attack: 0,
  defense: 0,
  hp: 0,
  speed: 0,
  image_url: "",
};

export const MonsterForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: ["name", "image_url"].includes(name) ? value : Number(value) || 0,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      await monsterService.add(formData);
      setFormData(initialFormState);
    } catch (error) {
      console.error("Failed to create monster:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    < LayoutBase title="Criar Monstro" >
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        display="grid"
        gap={2}
        p={2}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Attack"
          name="attack"
          type="number"
          value={formData.attack}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Defense"
          name="defense"
          type="number"
          value={formData.defense}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="HP"
          name="hp"
          type="number"
          value={formData.hp}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Speed"
          name="speed"
          type="number"
          value={formData.speed}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Image URL"
          name="image_url"
          value={formData.image_url}
          onChange={handleInputChange}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create Monster"}
        </Button>
      </Box>
    </LayoutBase>
  );
};
