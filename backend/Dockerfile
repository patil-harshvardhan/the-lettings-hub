# Doker File for FastAPI
FROM python:3.10-slim

USER root

# Copy the current directory contents into the container at /app
COPY . /app

# Set the working directory
WORKDIR /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 8000

# Set Timezone to London
ENV TZ="Europe/London"

# Run application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]