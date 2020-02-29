FROM nginx:alpine
 
COPY nginx.conf /etc/nginx/nginx.conf

# In order to keep my container alive in a Kubernetes cluster, we have to have a task running into the container
CMD ["sh", "-c", "tail -f /dev/null"]
