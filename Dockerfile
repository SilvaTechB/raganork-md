FROM quay.io/souravkl11/rgnk-v3:latest
# whatsapp booooooooooooooot
RUN git clone https://github.com/haroon0987/whatsapp-md /railway/Raganork
WORKDIR /railway/Raganork
ENV TZ=Asia/Kolkata
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
